import { useEffect, useState, useRef } from "react";
import { events, commands, type Payload } from "./lib/bindings";
import QRCode from "react-qr-code"; // 追加

function App() {
  const [logs, setLogs] = useState<Payload[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // サーバーURL (http://192.168.x.x:3000)
  const [serverUrl, setServerUrl] = useState<string>("");
  // QRコード表示切り替え
  const [showQr, setShowQr] = useState(false);

  // 初期化時にサーバーURLを取得
  useEffect(() => {
    commands.getServerUrl().then((url) => {
      if (url.status == "ok") {
        setServerUrl(url.data);
      }
    }).catch(console.error);

    // ... (イベントリスナーのコードはそのまま) ...
    const unlistenPromise = events.payload.listen((event) => {
      setLogs((prev) => [...prev, event.payload]);
    });
    return () => { unlistenPromise.then((u) => u()); };
  }, []);

  // ... (自動スクロールやgetEventContent関数はそのまま) ...
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const getEventContent = (log: Payload) => { /* 省略(既存コード) */
    return { color: "text-white", text: JSON.stringify(log.event) }; // 仮
  };

  return (
    <main className="container mx-auto p-4 h-screen flex flex-col bg-slate-900 text-white relative">
      <header className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
        <h1 className="text-2xl font-bold">VRChat Log Monitor</h1>

        {/* QRコード表示ボタン */}
        <button
          onClick={() => setShowQr(!showQr)}
          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          {showQr ? "Hide QR" : "Connect Mobile"}
        </button>
      </header>

      {/* QRコード表示エリア (オーバーレイ) */}
      {showQr && (
        <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-xl z-50 text-slate-900 text-center">
          <h3 className="font-bold mb-2 text-sm">Scan to Connect</h3>
          <div className="bg-white p-2">
            {serverUrl ? (
              <QRCode value={serverUrl} size={150} />
            ) : (
              <p>Loading IP...</p>
            )}
          </div>
          <p className="text-xs mt-2 font-mono bg-gray-100 p-1 rounded">
            {serverUrl}
          </p>
        </div>
      )}

      {/* ログ表示エリア (既存コード) */}
      <div className="flex-1 overflow-y-auto bg-slate-800 rounded-md p-4 shadow-inner font-mono text-sm">
        {logs.map((log, index) => (
          // ... 省略 (既存のログ表示部分) ...
          <div key={index}>{log.timestamp} : {JSON.stringify(log.event)}</div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* フッター (既存コード) */}
      <div className="mt-4 flex justify-between">
        {/* ... */}
      </div>
    </main>
  );
}

export default App;
