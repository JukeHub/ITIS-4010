export interface Vote {
    userId: string;
    proposalId: string;
    voteValue: boolean; // true for 'yes', false for 'no'
}

export class VoteHandler {
    private votes: Vote[] = [];

    public castVote(userId: string, proposalId: string, voteValue: boolean): void {
        const existingVoteIndex = this.votes.findIndex(vote => vote.userId === userId && vote.proposalId === proposalId);
        
        if (existingVoteIndex !== -1) {
            this.votes[existingVoteIndex].voteValue = voteValue; // Update existing vote
        } else {
            this.votes.push({ userId, proposalId, voteValue }); // Add new vote
        }
    }

    public getVotesForProposal(proposalId: string): { yesVotes: number; noVotes: number } {
        const yesVotes = this.votes.filter(vote => vote.proposalId === proposalId && vote.voteValue).length;
        const noVotes = this.votes.filter(vote => vote.proposalId === proposalId && !vote.voteValue).length;

        return { yesVotes, noVotes };
    }

    public hasUserVoted(userId: string, proposalId: string): boolean {
        return this.votes.some(vote => vote.userId === userId && vote.proposalId === proposalId);
    }
}