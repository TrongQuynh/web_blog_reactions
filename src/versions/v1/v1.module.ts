import { Module } from '@nestjs/common';
import { ReactionModule } from './reaction/reaction.module';

@Module({
    imports: [ReactionModule],
})
export class V1Module {}
