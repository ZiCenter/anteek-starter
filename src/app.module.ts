import { Module } from "@nestjs/common";
import { AnteekModule } from '@zicenter/anteek-core';

@Module({
  imports: [AnteekModule.forRoot({ jwt: {} })],
})
export class AppModule {
}
