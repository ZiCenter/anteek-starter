import { AnteekUserService, GqlExecutionContext, UserRecord } from '@zicenter/anteek-core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends AnteekUserService {
    constructor() {
        super();
    }

    async loadUserFromJwt(jwt: Record<string, any>): Promise<UserRecord> {
        return jwt as UserRecord;
    }

    guestSessionId(request: GqlExecutionContext): string {
        return request.getContext().req.header('sess-id');
    }
}
