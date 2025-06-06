// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReadinessCheckRequest } from "../models/models_0";
import { de_DeleteReadinessCheckCommand, se_DeleteReadinessCheckCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReadinessCheckCommand}.
 */
export interface DeleteReadinessCheckCommandInput extends DeleteReadinessCheckRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReadinessCheckCommand}.
 */
export interface DeleteReadinessCheckCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a readiness check.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, DeleteReadinessCheckCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, DeleteReadinessCheckCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // DeleteReadinessCheckRequest
 *   ReadinessCheckName: "STRING_VALUE", // required
 * };
 * const command = new DeleteReadinessCheckCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReadinessCheckCommandInput - {@link DeleteReadinessCheckCommandInput}
 * @returns {@link DeleteReadinessCheckCommandOutput}
 * @see {@link DeleteReadinessCheckCommandInput} for command's `input` shape.
 * @see {@link DeleteReadinessCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 *
 * @public
 */
export class DeleteReadinessCheckCommand extends $Command
  .classBuilder<
    DeleteReadinessCheckCommandInput,
    DeleteReadinessCheckCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryReadiness", "DeleteReadinessCheck", {})
  .n("Route53RecoveryReadinessClient", "DeleteReadinessCheckCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReadinessCheckCommand)
  .de(de_DeleteReadinessCheckCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReadinessCheckRequest;
      output: {};
    };
    sdk: {
      input: DeleteReadinessCheckCommandInput;
      output: DeleteReadinessCheckCommandOutput;
    };
  };
}
