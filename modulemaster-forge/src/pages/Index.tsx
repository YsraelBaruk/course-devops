import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "5 Módulos Completos",
      description: "Conteúdo estruturado com vídeos, textos, áudios e PDFs para um aprendizado completo"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificado Reconhecido",
      description: "Receba um certificado de conclusão ao finalizar todos os módulos com sucesso"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Suporte Especializado",
      description: "Conte com nossa equipe de especialistas para tirar suas dúvidas durante todo o curso"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Aprenda no Seu Ritmo",
      description: "Acesso 24/7 para que você possa estudar quando e onde quiser"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-lg p-2">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">EduPlatform</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/register">Começar Agora</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforme Sua Carreira com
            <span className="block bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">
              Conhecimento de Qualidade
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
            Aprenda com especialistas através de um curso completo e estruturado. 
            5 módulos práticos que vão acelerar seu crescimento profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="warning" size="lg" className="text-lg px-8 py-3" asChild>
              <Link to="/register">Inscrever-se Agora</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-background text-background hover:bg-background hover:text-primary" asChild>
              <Link to="/login">Já tenho conta</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-background/80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-current" />
              <span>Avaliação 4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>+2.500 alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Certificado reconhecido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher nossa plataforma?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma experiência de aprendizado completa e personalizada para seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-200 text-center">
                <CardHeader>
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de profissionais que já transformaram suas carreiras
          </p>
          <Button variant="warning" size="lg" className="text-lg px-8 py-3" asChild>
            <Link to="/register">Começar Agora - É Grátis</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-primary rounded-lg p-2">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EduPlatform</span>
            </div>
            
            <div className="text-center text-background/70">
              <p>&copy; 2024 EduPlatform. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
