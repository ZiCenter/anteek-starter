export type OperationPolicies = OperationPolicy[];

export interface OperationPolicy {
    if(user: any, input: any, selections: any): boolean;
    input?(user: any): any;
    selections?: Record<string, any>;
}
