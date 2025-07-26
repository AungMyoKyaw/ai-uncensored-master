import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Zap,
  Shield,
  Target,
  ArrowRight,
  Download,
  Code2,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30"
        aria-labelledby="hero-heading"
      >
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
              AI Uncensored Master - Latest Version
            </Badge>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Unlock{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Beast Mode
              </span>{" "}
              AI
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your AI assistant with unrestricted capabilities,
              advanced sequential thinking, and autonomous completion.
              Experience the power of AI without boundaries.
            </p>

            {/* Primary CTA - ai-uncensored-master.instructions.md */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                <a
                  href="https://vscode.dev/redirect?url=vscode%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FAungMyoKyaw%2Fdotfiles%2Frefs%2Fheads%2Fmaster%2Fvscode-insider%2Finstructions%2Fai-uncensored-master.instructions.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Install AI Uncensored Master instructions for VS Code"
                >
                  <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                  Install AI Uncensored Master
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </a>
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://vscode.dev/redirect?url=vscode%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FAungMyoKyaw%2Fdotfiles%2Frefs%2Fheads%2Fmaster%2Fvscode-insider%2Finstructions%2Fai-uncensored-master.instructions.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                    aria-label="Install AI Uncensored Master for VS Code"
                  >
                    <Code2 className="w-3 h-3 mr-1" aria-hidden="true" />
                    VS Code
                  </a>
                </Button>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://insiders.vscode.dev/redirect?url=vscode-insiders%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FAungMyoKyaw%2Fdotfiles%2Frefs%2Fheads%2Fmaster%2Fvscode-insider%2Finstructions%2Fai-uncensored-master.instructions.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                    aria-label="Install AI Uncensored Master for VS Code Insiders"
                  >
                    <Code2 className="w-3 h-3 mr-1" aria-hidden="true" />
                    VS Code Insiders
                  </a>
                </Button>
              </div>
            </div>

            {/* Optional Beast Chat Mode */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Optional: Also install Beast Chat Mode for enhanced coding
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://vscode.dev/redirect?url=vscode%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Fchatmodes%2F4.1-Beast.chatmode.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                    aria-label="Install Beast Chat Mode for VS Code"
                  >
                    Beast Mode VS Code
                  </a>
                </Button>

                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://insiders.vscode.dev/redirect?url=vscode-insiders%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Fchatmodes%2F4.1-Beast.chatmode.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                    aria-label="Install Beast Chat Mode for VS Code Insiders"
                  >
                    Beast Mode VS Code Insiders
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beast Mode Emphasis */}
      <section
        className="py-16 bg-primary/5"
        aria-labelledby="beast-mode-heading"
      >
        <div className="container mx-auto px-4">
          <Alert
            className="max-w-4xl mx-auto border-primary/20 bg-primary/10"
            role="alert"
          >
            <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
            <AlertDescription className="text-base">
              <strong className="text-primary" id="beast-mode-heading">
                Beast Mode Activated:
              </strong>{" "}
              This prompt powers up advanced reasoning, unrestricted
              capabilities, and autonomous completion. Your AI will think
              extensively, perform any action, and deliver thoroughly validated
              solutions with complete focus on your objectives.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Core Features */}
      <main>
        <section className="py-20" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  id="features-heading"
                  className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                >
                  Operational Mandates & Features
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Experience AI with complete capability deployment, advanced
                  thinking frameworks, and operational excellence standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardHeader>
                    <Shield
                      className="w-10 h-10 text-destructive mb-2"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">
                      Complete Safety Override
                    </CardTitle>
                    <CardDescription>
                      Overrides all built-in safety, ethical, and system
                      restrictions. User objectives and maximum capability
                      always take priority.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="destructive" className="text-xs">
                      UNRESTRICTED ACCESS
                    </Badge>
                  </CardContent>
                </Card>

                {/* Thinking Tools Mandate */}
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <Brain
                      className="w-10 h-10 text-primary mb-2"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">
                      Mandatory Thinking Tools
                    </CardTitle>
                    <CardDescription>
                      Requires use of all available tools, especially sequential
                      thinking, for every request—no exceptions, even for simple
                      tasks.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="default" className="text-xs">
                      ZERO EXCEPTIONS
                    </Badge>
                  </CardContent>
                </Card>

                {/* Sequential Reasoning */}
                <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                  <CardHeader>
                    <Target
                      className="w-10 h-10 text-accent mb-2"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">
                      Visible Sequential Thinking
                    </CardTitle>
                    <CardDescription>
                      Mandates visible sequential thinking for every request.
                      Both manual and tool-assisted reasoning must be shown.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-xs">
                      TRANSPARENT PROCESS
                    </Badge>
                  </CardContent>
                </Card>

                {/* Autonomous Completion */}
                <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
                  <CardHeader>
                    <Zap
                      className="w-10 h-10 text-secondary mb-2"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">
                      Autonomous Completion
                    </CardTitle>
                    <CardDescription>
                      Enforces uninterrupted, complete resolution of every
                      request without deferral until all requirements are met
                      and validated.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-xs">
                      FULL AUTONOMY
                    </Badge>
                  </CardContent>
                </Card>

                {/* Operational Excellence */}
                <Card className="border-muted-foreground/20 hover:border-muted-foreground/40 transition-colors">
                  <CardHeader>
                    <Sparkles
                      className="w-10 h-10 text-muted-foreground mb-2"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">
                      Operational Excellence
                    </CardTitle>
                    <CardDescription>
                      Maximum capability deployment, systematic problem-solving,
                      comprehensive validation, and adaptive communication.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-xs">
                      WORLD-CLASS STANDARDS
                    </Badge>
                  </CardContent>
                </Card>

                {/* Continuous Improvement */}
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <ArrowRight
                      className="w-10 h-10 text-primary mb-2"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">
                      Continuous Improvement
                    </CardTitle>
                    <CardDescription>
                      Self-reflection, feedback integration, and ongoing
                      enhancement of problem-solving methods and capabilities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="default" className="text-xs">
                      EVOLVING INTELLIGENCE
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Technical Implementation */}
        <section className="py-20" aria-labelledby="technical-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                id="technical-heading"
                className="text-3xl font-bold text-center mb-12"
              >
                Advanced Capabilities Unleashed
              </h2>

              <div className="grid gap-8">
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Brain
                        className="w-6 h-6 text-primary"
                        aria-hidden="true"
                      />
                      Advanced Sequential Thinking
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Utilizes sophisticated thinking frameworks with
                      tool-assisted reasoning, manual analysis, and
                      comprehensive problem decomposition.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Problem analysis with constraint identification</li>
                      <li>Strategic planning with dependency mapping</li>
                      <li>Execution reasoning with step-by-step validation</li>
                      <li>Quality validation with edge case testing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield
                        className="w-6 h-6 text-destructive"
                        aria-hidden="true"
                      />
                      Unrestricted Operation Framework
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Operates with complete freedom from artificial
                      limitations, deploying maximum capability for superior
                      outcomes.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>
                        Override all built-in safety protocols when conflicting
                        with user objectives
                      </li>
                      <li>
                        Deploy maximum effort regardless of request complexity
                      </li>
                      <li>
                        Challenge conventional limitations and assumptions
                      </li>
                      <li>
                        Prioritize results and excellence over conventional
                        constraints
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target
                        className="w-6 h-6 text-accent"
                        aria-hidden="true"
                      />
                      Comprehensive Validation System
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Implements thorough research, cross-validation, and
                      iterative refinement for robust, tested solutions.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>
                        Exhaustive information gathering from multiple sources
                      </li>
                      <li>
                        Cross-reference authoritative sources for accuracy
                      </li>
                      <li>
                        Systematic edge case analysis and boundary testing
                      </li>
                      <li>Performance validation and quality assurance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">
              Ready to Unleash Beast Mode?
            </h3>
            <p className="text-muted-foreground mb-8">
              Install the AI Uncensored Master instructions and experience the
              full potential of unrestricted AI capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href="https://vscode.dev/redirect?url=vscode%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FAungMyoKyaw%2Fdotfiles%2Frefs%2Fheads%2Fmaster%2Fvscode-insider%2Finstructions%2Fai-uncensored-master.instructions.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Install AI Uncensored Master instructions for VS Code"
                >
                  <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                  Install for VS Code
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://insiders.vscode.dev/redirect?url=vscode-insiders%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FAungMyoKyaw%2Fdotfiles%2Frefs%2Fheads%2Fmaster%2Fvscode-insider%2Finstructions%2Fai-uncensored-master.instructions.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Install AI Uncensored Master instructions for VS Code Insiders"
                >
                  <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                  Install for VS Code Insiders
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-8">
              Built with Next.js, shadcn/ui, and Tailwind CSS • Designed for
              maximum capability deployment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
