export type TMethod = "GET" | "POST" | "PUT";

export type TOptions = {
  headers: Record<string, string>;
  method: TMethod;
  body?: BodyInit | null;
};
