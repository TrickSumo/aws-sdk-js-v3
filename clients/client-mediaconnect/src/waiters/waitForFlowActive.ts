// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { DescribeFlowCommand, DescribeFlowCommandInput } from "../commands/DescribeFlowCommand";
import { MediaConnectClient } from "../MediaConnectClient";

const checkState = async (client: MediaConnectClient, input: DescribeFlowCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeFlowCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "STARTING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "STANDBY") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name && exception.name == "ServiceUnavailableException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a flow is active
 *  @deprecated Use waitUntilFlowActive instead. waitForFlowActive does not throw error in non-success cases.
 */
export const waitForFlowActive = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: DescribeFlowCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a flow is active
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
export const waitUntilFlowActive = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: DescribeFlowCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
