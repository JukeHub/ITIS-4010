import { Router } from 'express';
import GovernanceController from '../controllers/governanceController';

const router = Router();
const governanceController = new GovernanceController();

// Route to propose a new feature
router.post('/propose', governanceController.proposeFeature);

// Route to vote on a feature
router.post('/vote', governanceController.voteOnFeature);

// Route to get all proposals
router.get('/proposals', governanceController.getProposals);

export default router;