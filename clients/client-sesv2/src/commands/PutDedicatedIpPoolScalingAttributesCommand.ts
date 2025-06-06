// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutDedicatedIpPoolScalingAttributesRequest,
  PutDedicatedIpPoolScalingAttributesResponse,
} from "../models/models_1";
import {
  de_PutDedicatedIpPoolScalingAttributesCommand,
  se_PutDedicatedIpPoolScalingAttributesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDedicatedIpPoolScalingAttributesCommand}.
 */
export interface PutDedicatedIpPoolScalingAttributesCommandInput extends PutDedicatedIpPoolScalingAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutDedicatedIpPoolScalingAttributesCommand}.
 */
export interface PutDedicatedIpPoolScalingAttributesCommandOutput
  extends PutDedicatedIpPoolScalingAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to convert a dedicated IP pool to a different scaling mode.</p>
 *          <note>
 *             <p>
 *                <code>MANAGED</code> pools cannot be converted to <code>STANDARD</code> scaling mode.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDedicatedIpPoolScalingAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDedicatedIpPoolScalingAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutDedicatedIpPoolScalingAttributesRequest
 *   PoolName: "STRING_VALUE", // required
 *   ScalingMode: "STANDARD" || "MANAGED", // required
 * };
 * const command = new PutDedicatedIpPoolScalingAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDedicatedIpPoolScalingAttributesCommandInput - {@link PutDedicatedIpPoolScalingAttributesCommandInput}
 * @returns {@link PutDedicatedIpPoolScalingAttributesCommandOutput}
 * @see {@link PutDedicatedIpPoolScalingAttributesCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpPoolScalingAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @example Used to convert a dedicated IP pool to a different scaling mode.
 * ```javascript
 * // This example converts a dedicated IP pool from STANDARD to MANAGED.
 * const input = {
 *   PoolName: "sample-ses-pool",
 *   ScalingMode: "MANAGED"
 * };
 * const command = new PutDedicatedIpPoolScalingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutDedicatedIpPoolScalingAttributesCommand extends $Command
  .classBuilder<
    PutDedicatedIpPoolScalingAttributesCommandInput,
    PutDedicatedIpPoolScalingAttributesCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "PutDedicatedIpPoolScalingAttributes", {})
  .n("SESv2Client", "PutDedicatedIpPoolScalingAttributesCommand")
  .f(void 0, void 0)
  .ser(se_PutDedicatedIpPoolScalingAttributesCommand)
  .de(de_PutDedicatedIpPoolScalingAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDedicatedIpPoolScalingAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutDedicatedIpPoolScalingAttributesCommandInput;
      output: PutDedicatedIpPoolScalingAttributesCommandOutput;
    };
  };
}
