// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ConnectAppAuthorizationRequest,
  ConnectAppAuthorizationRequestFilterSensitiveLog,
  ConnectAppAuthorizationResponse,
} from "../models/models_0";
import { de_ConnectAppAuthorizationCommand, se_ConnectAppAuthorizationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConnectAppAuthorizationCommand}.
 */
export interface ConnectAppAuthorizationCommandInput extends ConnectAppAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link ConnectAppAuthorizationCommand}.
 */
export interface ConnectAppAuthorizationCommandOutput extends ConnectAppAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Establishes a connection between Amazon Web Services AppFabric and an application, which allows AppFabric to
 *          call the APIs of the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ConnectAppAuthorizationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ConnectAppAuthorizationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // ConnectAppAuthorizationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   appAuthorizationIdentifier: "STRING_VALUE", // required
 *   authRequest: { // AuthRequest
 *     redirectUri: "STRING_VALUE", // required
 *     code: "STRING_VALUE", // required
 *   },
 * };
 * const command = new ConnectAppAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // ConnectAppAuthorizationResponse
 * //   appAuthorizationSummary: { // AppAuthorizationSummary
 * //     appAuthorizationArn: "STRING_VALUE", // required
 * //     appBundleArn: "STRING_VALUE", // required
 * //     app: "STRING_VALUE", // required
 * //     tenant: { // Tenant
 * //       tenantIdentifier: "STRING_VALUE", // required
 * //       tenantDisplayName: "STRING_VALUE", // required
 * //     },
 * //     status: "PendingConnect" || "Connected" || "ConnectionValidationFailed" || "TokenAutoRotationFailed", // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ConnectAppAuthorizationCommandInput - {@link ConnectAppAuthorizationCommandInput}
 * @returns {@link ConnectAppAuthorizationCommandOutput}
 * @see {@link ConnectAppAuthorizationCommandInput} for command's `input` shape.
 * @see {@link ConnectAppAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 *
 * @public
 */
export class ConnectAppAuthorizationCommand extends $Command
  .classBuilder<
    ConnectAppAuthorizationCommandInput,
    ConnectAppAuthorizationCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "ConnectAppAuthorization", {})
  .n("AppFabricClient", "ConnectAppAuthorizationCommand")
  .f(ConnectAppAuthorizationRequestFilterSensitiveLog, void 0)
  .ser(se_ConnectAppAuthorizationCommand)
  .de(de_ConnectAppAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConnectAppAuthorizationRequest;
      output: ConnectAppAuthorizationResponse;
    };
    sdk: {
      input: ConnectAppAuthorizationCommandInput;
      output: ConnectAppAuthorizationCommandOutput;
    };
  };
}
