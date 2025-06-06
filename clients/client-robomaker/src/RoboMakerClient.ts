// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultRoboMakerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchDeleteWorldsCommandInput, BatchDeleteWorldsCommandOutput } from "./commands/BatchDeleteWorldsCommand";
import {
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput,
} from "./commands/BatchDescribeSimulationJobCommand";
import {
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput,
} from "./commands/CancelDeploymentJobCommand";
import {
  CancelSimulationJobBatchCommandInput,
  CancelSimulationJobBatchCommandOutput,
} from "./commands/CancelSimulationJobBatchCommand";
import {
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput,
} from "./commands/CancelSimulationJobCommand";
import {
  CancelWorldExportJobCommandInput,
  CancelWorldExportJobCommandOutput,
} from "./commands/CancelWorldExportJobCommand";
import {
  CancelWorldGenerationJobCommandInput,
  CancelWorldGenerationJobCommandOutput,
} from "./commands/CancelWorldGenerationJobCommand";
import {
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput,
} from "./commands/CreateDeploymentJobCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput,
} from "./commands/CreateRobotApplicationCommand";
import {
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput,
} from "./commands/CreateRobotApplicationVersionCommand";
import { CreateRobotCommandInput, CreateRobotCommandOutput } from "./commands/CreateRobotCommand";
import {
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput,
} from "./commands/CreateSimulationApplicationCommand";
import {
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput,
} from "./commands/CreateSimulationApplicationVersionCommand";
import {
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput,
} from "./commands/CreateSimulationJobCommand";
import {
  CreateWorldExportJobCommandInput,
  CreateWorldExportJobCommandOutput,
} from "./commands/CreateWorldExportJobCommand";
import {
  CreateWorldGenerationJobCommandInput,
  CreateWorldGenerationJobCommandOutput,
} from "./commands/CreateWorldGenerationJobCommand";
import {
  CreateWorldTemplateCommandInput,
  CreateWorldTemplateCommandOutput,
} from "./commands/CreateWorldTemplateCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput,
} from "./commands/DeleteRobotApplicationCommand";
import { DeleteRobotCommandInput, DeleteRobotCommandOutput } from "./commands/DeleteRobotCommand";
import {
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput,
} from "./commands/DeleteSimulationApplicationCommand";
import {
  DeleteWorldTemplateCommandInput,
  DeleteWorldTemplateCommandOutput,
} from "./commands/DeleteWorldTemplateCommand";
import { DeregisterRobotCommandInput, DeregisterRobotCommandOutput } from "./commands/DeregisterRobotCommand";
import {
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput,
} from "./commands/DescribeDeploymentJobCommand";
import { DescribeFleetCommandInput, DescribeFleetCommandOutput } from "./commands/DescribeFleetCommand";
import {
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput,
} from "./commands/DescribeRobotApplicationCommand";
import { DescribeRobotCommandInput, DescribeRobotCommandOutput } from "./commands/DescribeRobotCommand";
import {
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput,
} from "./commands/DescribeSimulationApplicationCommand";
import {
  DescribeSimulationJobBatchCommandInput,
  DescribeSimulationJobBatchCommandOutput,
} from "./commands/DescribeSimulationJobBatchCommand";
import {
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput,
} from "./commands/DescribeSimulationJobCommand";
import { DescribeWorldCommandInput, DescribeWorldCommandOutput } from "./commands/DescribeWorldCommand";
import {
  DescribeWorldExportJobCommandInput,
  DescribeWorldExportJobCommandOutput,
} from "./commands/DescribeWorldExportJobCommand";
import {
  DescribeWorldGenerationJobCommandInput,
  DescribeWorldGenerationJobCommandOutput,
} from "./commands/DescribeWorldGenerationJobCommand";
import {
  DescribeWorldTemplateCommandInput,
  DescribeWorldTemplateCommandOutput,
} from "./commands/DescribeWorldTemplateCommand";
import {
  GetWorldTemplateBodyCommandInput,
  GetWorldTemplateBodyCommandOutput,
} from "./commands/GetWorldTemplateBodyCommand";
import { ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput } from "./commands/ListDeploymentJobsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "./commands/ListRobotApplicationsCommand";
import { ListRobotsCommandInput, ListRobotsCommandOutput } from "./commands/ListRobotsCommand";
import {
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "./commands/ListSimulationApplicationsCommand";
import {
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "./commands/ListSimulationJobBatchesCommand";
import { ListSimulationJobsCommandInput, ListSimulationJobsCommandOutput } from "./commands/ListSimulationJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "./commands/ListWorldExportJobsCommand";
import {
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
} from "./commands/ListWorldGenerationJobsCommand";
import { ListWorldsCommandInput, ListWorldsCommandOutput } from "./commands/ListWorldsCommand";
import { ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput } from "./commands/ListWorldTemplatesCommand";
import { RegisterRobotCommandInput, RegisterRobotCommandOutput } from "./commands/RegisterRobotCommand";
import {
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput,
} from "./commands/RestartSimulationJobCommand";
import {
  StartSimulationJobBatchCommandInput,
  StartSimulationJobBatchCommandOutput,
} from "./commands/StartSimulationJobBatchCommand";
import { SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput } from "./commands/SyncDeploymentJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput,
} from "./commands/UpdateRobotApplicationCommand";
import {
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput,
} from "./commands/UpdateSimulationApplicationCommand";
import {
  UpdateWorldTemplateCommandInput,
  UpdateWorldTemplateCommandOutput,
} from "./commands/UpdateWorldTemplateCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchDeleteWorldsCommandInput
  | BatchDescribeSimulationJobCommandInput
  | CancelDeploymentJobCommandInput
  | CancelSimulationJobBatchCommandInput
  | CancelSimulationJobCommandInput
  | CancelWorldExportJobCommandInput
  | CancelWorldGenerationJobCommandInput
  | CreateDeploymentJobCommandInput
  | CreateFleetCommandInput
  | CreateRobotApplicationCommandInput
  | CreateRobotApplicationVersionCommandInput
  | CreateRobotCommandInput
  | CreateSimulationApplicationCommandInput
  | CreateSimulationApplicationVersionCommandInput
  | CreateSimulationJobCommandInput
  | CreateWorldExportJobCommandInput
  | CreateWorldGenerationJobCommandInput
  | CreateWorldTemplateCommandInput
  | DeleteFleetCommandInput
  | DeleteRobotApplicationCommandInput
  | DeleteRobotCommandInput
  | DeleteSimulationApplicationCommandInput
  | DeleteWorldTemplateCommandInput
  | DeregisterRobotCommandInput
  | DescribeDeploymentJobCommandInput
  | DescribeFleetCommandInput
  | DescribeRobotApplicationCommandInput
  | DescribeRobotCommandInput
  | DescribeSimulationApplicationCommandInput
  | DescribeSimulationJobBatchCommandInput
  | DescribeSimulationJobCommandInput
  | DescribeWorldCommandInput
  | DescribeWorldExportJobCommandInput
  | DescribeWorldGenerationJobCommandInput
  | DescribeWorldTemplateCommandInput
  | GetWorldTemplateBodyCommandInput
  | ListDeploymentJobsCommandInput
  | ListFleetsCommandInput
  | ListRobotApplicationsCommandInput
  | ListRobotsCommandInput
  | ListSimulationApplicationsCommandInput
  | ListSimulationJobBatchesCommandInput
  | ListSimulationJobsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorldExportJobsCommandInput
  | ListWorldGenerationJobsCommandInput
  | ListWorldTemplatesCommandInput
  | ListWorldsCommandInput
  | RegisterRobotCommandInput
  | RestartSimulationJobCommandInput
  | StartSimulationJobBatchCommandInput
  | SyncDeploymentJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateRobotApplicationCommandInput
  | UpdateSimulationApplicationCommandInput
  | UpdateWorldTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchDeleteWorldsCommandOutput
  | BatchDescribeSimulationJobCommandOutput
  | CancelDeploymentJobCommandOutput
  | CancelSimulationJobBatchCommandOutput
  | CancelSimulationJobCommandOutput
  | CancelWorldExportJobCommandOutput
  | CancelWorldGenerationJobCommandOutput
  | CreateDeploymentJobCommandOutput
  | CreateFleetCommandOutput
  | CreateRobotApplicationCommandOutput
  | CreateRobotApplicationVersionCommandOutput
  | CreateRobotCommandOutput
  | CreateSimulationApplicationCommandOutput
  | CreateSimulationApplicationVersionCommandOutput
  | CreateSimulationJobCommandOutput
  | CreateWorldExportJobCommandOutput
  | CreateWorldGenerationJobCommandOutput
  | CreateWorldTemplateCommandOutput
  | DeleteFleetCommandOutput
  | DeleteRobotApplicationCommandOutput
  | DeleteRobotCommandOutput
  | DeleteSimulationApplicationCommandOutput
  | DeleteWorldTemplateCommandOutput
  | DeregisterRobotCommandOutput
  | DescribeDeploymentJobCommandOutput
  | DescribeFleetCommandOutput
  | DescribeRobotApplicationCommandOutput
  | DescribeRobotCommandOutput
  | DescribeSimulationApplicationCommandOutput
  | DescribeSimulationJobBatchCommandOutput
  | DescribeSimulationJobCommandOutput
  | DescribeWorldCommandOutput
  | DescribeWorldExportJobCommandOutput
  | DescribeWorldGenerationJobCommandOutput
  | DescribeWorldTemplateCommandOutput
  | GetWorldTemplateBodyCommandOutput
  | ListDeploymentJobsCommandOutput
  | ListFleetsCommandOutput
  | ListRobotApplicationsCommandOutput
  | ListRobotsCommandOutput
  | ListSimulationApplicationsCommandOutput
  | ListSimulationJobBatchesCommandOutput
  | ListSimulationJobsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorldExportJobsCommandOutput
  | ListWorldGenerationJobsCommandOutput
  | ListWorldTemplatesCommandOutput
  | ListWorldsCommandOutput
  | RegisterRobotCommandOutput
  | RestartSimulationJobCommandOutput
  | StartSimulationJobBatchCommandOutput
  | SyncDeploymentJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateRobotApplicationCommandOutput
  | UpdateSimulationApplicationCommandOutput
  | UpdateWorldTemplateCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type RoboMakerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of RoboMakerClient class constructor that set the region, credentials and other options.
 */
export interface RoboMakerClientConfig extends RoboMakerClientConfigType {}

/**
 * @public
 */
export type RoboMakerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of RoboMakerClient class. This is resolved and normalized from the {@link RoboMakerClientConfig | constructor configuration interface}.
 */
export interface RoboMakerClientResolvedConfig extends RoboMakerClientResolvedConfigType {}

/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 * @public
 */
export class RoboMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RoboMakerClientResolvedConfig
> {
  /**
   * The resolved configuration of RoboMakerClient class. This is resolved and normalized from the {@link RoboMakerClientConfig | constructor configuration interface}.
   */
  readonly config: RoboMakerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RoboMakerClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultRoboMakerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RoboMakerClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
