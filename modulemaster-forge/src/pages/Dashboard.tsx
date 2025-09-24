import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Play, 
  FileText, 
  Headphones, 
  CheckCircle, 
  Clock, 
  Award,
  Settings,
  Bell,
  User,
  Menu,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [currentModule, setCurrentModule] = useState(1);
  
  const modules = [
    {
      id: 1,
      title: "Introdução aos Conceitos Fundamentais",
      description: "Aprenda os conceitos básicos e fundamentos essenciais",
      progress: 100,
      completed: true,
      lessons: 8,
      duration: "2h 30min",
      contents: [
        { type: "video", title: "Vídeo de Boas-vindas", duration: "15min", completed: true },
        { type: "text", title: "Conceitos Básicos", duration: "20min", completed: true },
        { type: "audio", title: "Podcast: Introdução", duration: "25min", completed: true },
        { type: "pdf", title: "Material de Apoio", duration: "30min", completed: true },
      ]
    },
    {
      id: 2,
      title: "Desenvolvimento Prático",
      description: "Aplicação prática dos conceitos aprendidos",
      progress: 75,
      completed: false,
      lessons: 12,
      duration: "4h 15min",
      contents: [
        { type: "video", title: "Aula Prática 1", duration: "45min", completed: true },
        { type: "text", title: "Exercícios Guiados", duration: "30min", completed: true },
        { type: "video", title: "Aula Prática 2", duration: "50min", completed: false },
        { type: "pdf", title: "Casos de Estudo", duration: "1h 30min", completed: false },
      ]
    },
    {
      id: 3,
      title: "Técnicas Avançadas",
      description: "Explore técnicas e métodos mais avançados",
      progress: 30,
      completed: false,
      lessons: 15,
      duration: "5h 45min",
      contents: [
        { type: "video", title: "Conceitos Avançados", duration: "1h 15min", completed: true },
        { type: "text", title: "Teoria Avançada", duration: "45min", completed: false },
        { type: "audio", title: "Entrevista com Especialista", duration: "35min", completed: false },
        { type: "pdf", title: "Documentação Técnica", duration: "2h 30min", completed: false },
      ]
    },
    {
      id: 4,
      title: "Projeto Final",
      description: "Desenvolva seu projeto final aplicando todo conhecimento",
      progress: 0,
      completed: false,
      lessons: 10,
      duration: "6h 00min",
      contents: [
        { type: "text", title: "Briefing do Projeto", duration: "30min", completed: false },
        { type: "video", title: "Orientações Gerais", duration: "45min", completed: false },
        { type: "pdf", title: "Template do Projeto", duration: "15min", completed: false },
      ]
    },
    {
      id: 5,
      title: "Avaliação e Certificação",
      description: "Avaliação final e emissão do certificado",
      progress: 0,
      completed: false,
      lessons: 3,
      duration: "1h 30min",
      contents: [
        { type: "text", title: "Preparação para Avaliação", duration: "20min", completed: false },
        { type: "text", title: "Prova Final", duration: "1h", completed: false },
        { type: "pdf", title: "Certificado", duration: "10min", completed: false },
      ]
    }
  ];

  const overallProgress = Math.round(modules.reduce((acc, module) => acc + module.progress, 0) / modules.length);
  const completedModules = modules.filter(module => module.completed).length;

  const getContentIcon = (type: string) => {
    switch (type) {
      case "video": return <Play className="h-4 w-4" />;
      case "audio": return <Headphones className="h-4 w-4" />;
      case "text": return <FileText className="h-4 w-4" />;
      case "pdf": return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-lg p-2">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-foreground">EduPlatform</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/settings">
                  <Settings className="h-5 w-5" />
                </Link>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bem-vindo de volta! 👋
          </h1>
          <p className="text-muted-foreground">
            Continue sua jornada de aprendizado onde parou
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Progresso Geral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">
                {overallProgress}%
              </div>
              <Progress value={overallProgress} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {completedModules} de {modules.length} módulos concluídos
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Tempo Investido
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">
                12h 30min
              </div>
              <p className="text-sm text-muted-foreground">
                De aproximadamente 20h totais
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Próxima Meta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-foreground mb-2">
                Módulo 2
              </div>
              <p className="text-sm text-muted-foreground">
                Finalize o desenvolvimento prático
              </p>
              <Button variant="success" size="sm" className="mt-3">
                Continuar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Course Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Módulos do Curso
          </h2>

          {modules.map((module) => (
            <Card key={module.id} className="bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">
                        Módulo {module.id}: {module.title}
                      </CardTitle>
                      {module.completed && (
                        <Badge variant="default" className="bg-accent text-accent-foreground">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Concluído
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{module.lessons} aulas</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {module.progress}%
                    </div>
                    <Progress value={module.progress} className="w-24" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {module.contents.map((content, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                        content.completed 
                          ? "bg-accent/10 border-accent text-accent-foreground" 
                          : "bg-muted/50 border-border hover:bg-muted"
                      }`}
                    >
                      <div className={`p-1.5 rounded ${content.completed ? "bg-accent text-accent-foreground" : "bg-muted"}`}>
                        {getContentIcon(content.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {content.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {content.duration}
                        </div>
                      </div>
                      {content.completed && (
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant={module.completed ? "default" : "hero"} 
                    className="flex-1"
                    asChild
                  >
                    <Link to={`/module/${module.id}`}>
                      {module.completed ? "Revisar Módulo" : module.progress > 0 ? "Continuar" : "Iniciar Módulo"}
                    </Link>
                  </Button>
                  {module.completed && (
                    <Button variant="outline" asChild>
                      <Link to={`/exam/${module.id}`}>
                        Fazer Prova
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Section */}
        {overallProgress === 100 && (
          <Card className="mt-8 bg-gradient-hero text-background border-0 shadow-hero">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Award className="h-8 w-8" />
                Parabéns! Curso Concluído
              </CardTitle>
              <CardDescription className="text-background/80 text-lg">
                Você completou todos os módulos com sucesso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="warning" size="lg" className="font-semibold">
                Baixar Certificado
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;