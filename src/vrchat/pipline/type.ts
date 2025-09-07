export interface PipelineMessage<T extends string = any> {
  type: T;
  content: Content<T>;
}
export interface Content<T extends string> {
  [key: string]: any;
}