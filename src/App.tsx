import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import { Toast } from './components/Toast';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OnboardingPage from './pages/OnboardingPage';
import StudentDashboard from './pages/StudentDashboard';
import ProfilePage from './pages/ProfilePage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import OpportunityDetailPage from './pages/OpportunityDetailPage';
import AIMatchPage from './pages/AIMatchPage';
import TeamFormationPage from './pages/TeamFormationPage';
import WorkspacePage from './pages/WorkspacePage';
import ProofUpdatePage from './pages/ProofUpdatePage';
import ChallengesPage from './pages/ChallengesPage';
import MentorsPage from './pages/MentorsPage';
import CompanyDashboard from './pages/CompanyDashboard';
import PostProblemPage from './pages/PostProblemPage';
import CompanyTalentPage from './pages/CompanyTalentPage';

type Page =
  | 'landing'
  | 'login'
  | 'signup'
  | 'onboarding'
  | 'dashboard'
  | 'profile'
  | 'opportunities'
  | 'opportunity-detail'
  | 'ai-match'
  | 'team-formation'
  | 'teams'
  | 'workspace'
  | 'proof-update'
  | 'challenges'
  | 'mentors'
  | 'company-dashboard'
  | 'post-problem'
  | 'company-talent';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [mode, setMode] = useState<'student' | 'company'>('student');
  const [toast, setToast] = useState<string | null>(null);
  const [updatedProofScore, setUpdatedProofScore] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useCallback((page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  const switchMode = () => {
    const newMode = mode === 'student' ? 'company' : 'student';
    setMode(newMode);
    navigate(newMode === 'company' ? 'company-dashboard' : 'dashboard');
    showToast(newMode === 'company' ? 'Switched to Company View' : 'Switched to Student View');
  };

  const handleOnboardingComplete = () => {
    navigate('dashboard');
    showToast('Welcome to ZUNIVA! Your builder profile is ready. 🚀');
  };

  const handleProjectComplete = () => {
    navigate('proof-update');
  };

  const handleScoreUpdate = () => {
    setUpdatedProofScore(true);
  };

  const showNavbar = currentPage !== 'landing' && currentPage !== 'login' && currentPage !== 'signup' && currentPage !== 'onboarding';

  const renderPage = () => {
    const props = { onNavigate: navigate, showToast };

    if (!isAuthenticated && !['landing', 'login', 'signup', 'onboarding'].includes(currentPage)) {
      return <LandingPage onNavigate={navigate} />;
    }

    switch (currentPage) {
      case 'landing': return <LandingPage onNavigate={navigate} />;
      case 'login': return <LoginPage onLogin={() => { setIsAuthenticated(true); navigate('dashboard'); }} onNavigate={navigate} />;
      case 'signup': return <SignupPage onSignup={() => { setIsAuthenticated(true); navigate('onboarding'); }} onNavigate={navigate} />;
      case 'onboarding': return <OnboardingPage onComplete={handleOnboardingComplete} />;
      case 'dashboard': return <StudentDashboard {...props} />;
      case 'profile': return <ProfilePage {...props} updatedScore={updatedProofScore ? 88 : undefined} />;
      case 'opportunities': return <OpportunitiesPage {...props} />;
      case 'opportunity-detail': return <OpportunityDetailPage {...props} />;
      case 'ai-match': return <AIMatchPage onNavigate={navigate} />;
      case 'team-formation':
      case 'teams': return <TeamFormationPage {...props} />;
      case 'workspace': return <WorkspacePage {...props} onProjectComplete={handleProjectComplete} />;
      case 'proof-update': return <ProofUpdatePage {...props} onScoreUpdate={handleScoreUpdate} />;
      case 'challenges': return <ChallengesPage {...props} />;
      case 'mentors': return <MentorsPage {...props} />;
      case 'company-dashboard': return <CompanyDashboard {...props} />;
      case 'post-problem': return <PostProblemPage {...props} />;
      case 'company-talent': return <CompanyTalentPage {...props} />;
      default: return <StudentDashboard {...props} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {showNavbar && (
        <Navbar
          onNavigate={navigate}
          currentPage={currentPage}
          showToast={showToast}
          mode={mode}
          onModeSwitch={switchMode}
          onLogout={() => {
            setIsAuthenticated(false);
            navigate('landing');
            showToast('You have been logged out.');
          }}
        />
      )}

      <main style={{ minHeight: showNavbar ? 'calc(100vh - 64px)' : '100vh' }}>
        {renderPage()}
      </main>

      {toast && (
        <Toast message={toast} onClose={() => setToast(null)} />
      )}
    </div>
  );
}
