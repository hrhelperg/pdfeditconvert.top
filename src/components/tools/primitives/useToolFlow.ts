"use client";

import { useCallback, useState } from "react";

export type ToolFlowSuccess = {
  filename: string;
  sizeBytes: number;
  blob: Blob;
};

export type ToolFlowState =
  | { status: "idle" }
  | { status: "busy"; message: string }
  | { status: "success"; success: ToolFlowSuccess }
  | { status: "error"; error: string; hint?: string };

export function useToolFlow() {
  const [state, setState] = useState<ToolFlowState>({ status: "idle" });

  const setBusy = useCallback(
    (message: string) => setState({ status: "busy", message }),
    [],
  );
  const setError = useCallback(
    (error: string, hint?: string) => setState({ status: "error", error, hint }),
    [],
  );
  const setSuccess = useCallback(
    (success: ToolFlowSuccess) => setState({ status: "success", success }),
    [],
  );
  const reset = useCallback(() => setState({ status: "idle" }), []);

  return { state, setBusy, setError, setSuccess, reset };
}
