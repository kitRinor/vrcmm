import { useEffect, useState } from "react";
import { commands } from "../generated/bindings";
import { analyzeSessions, type WorldSession, type PlayerInterval } from "../lib/logAnalytics";
import { Calendar, Clock, MapPin, User, ChevronLeft, ChevronRight } from "lucide-react";

export default function History() {
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD
  const [sessions, setSessions] = useState<WorldSession[]>([]);
  const [loading, setLoading] = useState(false);

  // 日付変更時にデータ取得
  useEffect(() => {
    fetchLogsByDate(targetDate);
  }, [targetDate]);

  const fetchLogsByDate = async (dateStr: string) => {
    setLoading(true);
    try {
      // 指定日の 00:00:00 から 23:59:59 までを取得
      const start = `${dateStr} 00:00:00`;
      const end = `${dateStr} 23:59:59`;

      const result = await commands.getLogs(start, end); //

      if (result.status === "ok") {
        const parsedSessions = analyzeSessions(result.data);
        setSessions(parsedSessions);
      } else {
        console.error(result.error);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (offset: number) => {
    const d = new Date(targetDate);
    d.setDate(d.getDate() + offset);
    setTargetDate(d.toISOString().split('T')[0]);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-white">
      {/* --- ヘッダーエリア (日付選択) --- */}
      <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex justify-between items-center shadow-md z-10">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Calendar className="text-blue-400" />
          History Timeline
        </h2>

        <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1 border border-slate-700">
          <button onClick={() => handleDateChange(-1)} className="p-1 hover:bg-slate-700 rounded transition">
            <ChevronLeft size={20} />
          </button>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="bg-transparent text-center focus:outline-none font-mono text-sm w-32 cursor-pointer"
          />
          <button onClick={() => handleDateChange(1)} className="p-1 hover:bg-slate-700 rounded transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* --- メインコンテンツ --- */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {loading ? (
          <div className="text-center text-slate-500 mt-20">Loading logs...</div>
        ) : sessions.length === 0 ? (
          <div className="text-center text-slate-500 mt-20">
            <p className="text-lg">No activity recorded on this day.</p>
            <p className="text-sm opacity-60">Try selecting a different date.</p>
          </div>
        ) : (
          sessions.map((session, idx) => (
            <SessionCard key={`${session.startTime}-${idx}`} session={session} />
          ))
        )}
      </div>
    </div>
  );
}

// --- 個別のワールド滞在カードコンポーネント ---
function SessionCard({ session }: { session: WorldSession }) {
  const formatTime = (ts: number) => new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const durationMin = Math.floor(session.durationMs / 1000 / 60);

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-sm">
      {/* セッションヘッダー */}
      <div className="bg-slate-700/50 px-4 py-3 flex justify-between items-center border-b border-slate-700">
        <div>
          <h3 className="font-bold text-lg text-blue-200 flex items-center gap-2">
            <MapPin size={18} /> {session.worldName}
          </h3>
          <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {formatTime(session.startTime)} - {formatTime(session.endTime)}
            </span>
            <span className="bg-slate-700 px-1.5 rounded text-[10px]">
              {durationMin} min
            </span>
          </div>
        </div>
        <div className="text-right text-xs text-slate-500 hidden sm:block">
          {session.players.length} people met
        </div>
      </div>

      {/* タイムラインエリア */}
      <div className="p-4 relative">
        {/* 自分 (Self) のベースバー */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="flex items-center gap-1 font-bold text-blue-400"><User size={12} /> {session.username || "You"}</span>
            <span>{durationMin} min</span>
          </div>
          <div className="h-2 bg-blue-500/30 rounded-full w-full relative overflow-hidden">
            {/* 自分はずっといるので全幅 */}
            <div className="absolute top-0 left-0 h-full bg-blue-500 w-full opacity-50" />
          </div>
        </div>

        {/* 他のプレイヤーリスト */}
        {session.players.length > 0 && (
          <div className="space-y-2 mt-2 border-t border-slate-700/50 pt-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Met Players</div>
            {session.players.map((player) => (
              <PlayerTimelineRow
                key={player.name}
                player={player}
                sessionStart={session.startTime}
                sessionDuration={session.durationMs}
              />
            ))}
          </div>
        )}

        {session.players.length === 0 && (
          <p className="text-xs text-slate-600 italic">No other players detected during this session.</p>
        )}
      </div>
    </div>
  );
}

// --- プレイヤーごとのタイムライン行 ---

function PlayerTimelineRow({ player, sessionStart, sessionDuration }: {
  player: PlayerInterval,
  sessionStart: number,
  sessionDuration: number
}) {
  const pDurationMin = Math.floor(player.totalDurationMs / 1000 / 60);

  return (
    <div className="group">
      <div className="flex items-center justify-between text-xs text-slate-300 mb-0.5">
        <span className="font-medium truncate w-32">{player.name}</span>
        <span className="text-[10px] text-slate-500">{pDurationMin > 0 ? `${pDurationMin}m` : "<1m"}</span>
      </div>

      {/* タイムラインバーの背景 */}
      <div className="h-1.5 bg-slate-700/50 rounded-full w-full relative">
        {/* 滞在区間の描画 (複数回出入りに対応) */}
        {player.intervals.map((interval, i) => {
          // セッション開始からの経過時間(%)を計算
          const startPercent = Math.max(0, ((interval.start - sessionStart) / sessionDuration) * 100);
          const endPercent = Math.min(100, ((interval.end - sessionStart) / sessionDuration) * 100);
          const widthPercent = endPercent - startPercent;

          return (
            <div
              key={i}
              className="absolute top-0 h-full bg-green-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
              style={{
                left: `${startPercent}%`,
                width: `${widthPercent}%`,
              }}
              title={`${new Date(interval.start).toLocaleTimeString()} - ${new Date(interval.end).toLocaleTimeString()}`}
            />
          );
        })}
      </div>
    </div>
  );
}
