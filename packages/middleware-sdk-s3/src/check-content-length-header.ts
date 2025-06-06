import { HttpRequest } from "@smithy/protocol-http";
import { NoOpLogger } from "@smithy/smithy-client";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

const CONTENT_LENGTH_HEADER = "content-length";
const DECODED_CONTENT_LENGTH_HEADER = "x-amz-decoded-content-length";

/**
 * @internal
 *
 * Log a warning if the input to PutObject is detected to be a Stream of unknown ContentLength and
 * recommend the usage of the @aws-sdk/lib-storage Upload class.
 */
export function checkContentLengthHeader(): FinalizeRequestMiddleware<any, any> {
  return <Output extends MetadataBearer>(
      next: FinalizeHandler<any, Output>,
      context: HandlerExecutionContext
    ): FinalizeHandler<any, Output> =>
    async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<Output>> => {
      const { request } = args;

      if (HttpRequest.isInstance(request)) {
        if (!(CONTENT_LENGTH_HEADER in request.headers) && !(DECODED_CONTENT_LENGTH_HEADER in request.headers)) {
          const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
          if (typeof context?.logger?.warn === "function" && !(context.logger instanceof NoOpLogger)) {
            context.logger.warn(message);
          } else {
            console.warn(message);
          }
        }
      }

      return next({ ...args });
    };
}

/**
 * @internal
 */
export const checkContentLengthHeaderMiddlewareOptions: FinalizeRequestHandlerOptions = {
  step: "finalizeRequest",
  tags: ["CHECK_CONTENT_LENGTH_HEADER"],
  name: "getCheckContentLengthHeaderPlugin",
  override: true,
};

/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCheckContentLengthHeaderPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
  },
});
