/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  GetRepositoriesInput: { // input type
    accessToken: string; // String!
  }
  RepositoryWhereInput: { // input type
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  RepositoryWhereUniqueInput: { // input type
    name?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    equals?: string | null; // String
  }
}

export interface NexusGenEnums {
  AccessTypes: "private" | "public"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  JSON: any
}

export interface NexusGenObjects {
  Query: {};
  Repository: { // root type
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    size: number; // Int!
  }
  RepositoryDetails: { // root type
    accessType: NexusGenEnums['AccessTypes']; // AccessTypes!
    activeWebhooks?: NexusGenScalars['JSON'] | null; // JSON
    filesCount: number; // Int!
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    size: number; // Int!
    ymlFileContent?: string | null; // String
  }
}

export interface NexusGenInterfaces {
  BaseRepoEntity: NexusGenRootTypes['Repository'] | NexusGenRootTypes['RepositoryDetails'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Query: { // field return type
    repositories: Array<NexusGenRootTypes['Repository'] | null> | null; // [Repository]
    repositoryDetails: NexusGenRootTypes['RepositoryDetails'] | null; // RepositoryDetails
  }
  Repository: { // field return type
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    size: number; // Int!
  }
  RepositoryDetails: { // field return type
    accessType: NexusGenEnums['AccessTypes']; // AccessTypes!
    activeWebhooks: NexusGenScalars['JSON'] | null; // JSON
    filesCount: number; // Int!
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    size: number; // Int!
    ymlFileContent: string | null; // String
  }
  BaseRepoEntity: { // field return type
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    size: number; // Int!
  }
}

export interface NexusGenFieldTypeNames {
  Query: { // field return type name
    repositories: 'Repository'
    repositoryDetails: 'RepositoryDetails'
  }
  Repository: { // field return type name
    id: 'ID'
    name: 'String'
    owner: 'String'
    size: 'Int'
  }
  RepositoryDetails: { // field return type name
    accessType: 'AccessTypes'
    activeWebhooks: 'JSON'
    filesCount: 'Int'
    id: 'ID'
    name: 'String'
    owner: 'String'
    size: 'Int'
    ymlFileContent: 'String'
  }
  BaseRepoEntity: { // field return type name
    id: 'ID'
    name: 'String'
    owner: 'String'
    size: 'Int'
  }
}

export interface NexusGenArgTypes {
  Query: {
    repositories: { // args
      input?: NexusGenInputs['GetRepositoriesInput'] | null; // GetRepositoriesInput
      where?: NexusGenInputs['RepositoryWhereInput'] | null; // RepositoryWhereInput
    }
    repositoryDetails: { // args
      input?: NexusGenInputs['GetRepositoriesInput'] | null; // GetRepositoriesInput
      where: NexusGenInputs['RepositoryWhereUniqueInput']; // RepositoryWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  BaseRepoEntity: "Repository" | "RepositoryDetails"
}

export interface NexusGenTypeInterfaces {
  Repository: "BaseRepoEntity"
  RepositoryDetails: "BaseRepoEntity"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "BaseRepoEntity";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * The complexity for an individual field. Return a number
     * or a function that returns a number to specify the
     * complexity for this field.
     */
    complexity?: QueryComplexity<TypeName, FieldName>
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}