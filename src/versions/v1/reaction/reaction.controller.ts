import { Body, Controller, Post } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { ReactionDTO } from './dto/reactions.dto';

@Controller('reaction')
export class ReactionController {
  constructor(private readonly reactionService: ReactionService) {}

  @Post("create")
  async handleCreateReaction(@Body() body: ReactionDTO) {
    // IN SUPPOSE 
    
  }

}
