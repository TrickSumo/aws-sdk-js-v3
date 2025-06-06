// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetWorkspaceRequest, GetWorkspaceResponse } from "../models/models_0";
import { de_GetWorkspaceCommand, se_GetWorkspaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkspaceCommand}.
 */
export interface GetWorkspaceCommandInput extends GetWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkspaceCommand}.
 */
export interface GetWorkspaceCommandOutput extends GetWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetWorkspaceCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetWorkspaceCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkspaceResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   linkedServices: [ // LinkedServices
 * //     "STRING_VALUE",
 * //   ],
 * //   s3Location: "STRING_VALUE",
 * //   role: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetWorkspaceCommandInput - {@link GetWorkspaceCommandInput}
 * @returns {@link GetWorkspaceCommandOutput}
 * @see {@link GetWorkspaceCommandInput} for command's `input` shape.
 * @see {@link GetWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class GetWorkspaceCommand extends $Command
  .classBuilder<
    GetWorkspaceCommandInput,
    GetWorkspaceCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "GetWorkspace", {})
  .n("IoTTwinMakerClient", "GetWorkspaceCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkspaceCommand)
  .de(de_GetWorkspaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkspaceRequest;
      output: GetWorkspaceResponse;
    };
    sdk: {
      input: GetWorkspaceCommandInput;
      output: GetWorkspaceCommandOutput;
    };
  };
}
