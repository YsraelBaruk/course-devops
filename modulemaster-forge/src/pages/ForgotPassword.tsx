import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the password reset logic
    console.log("Password reset for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="bg-background rounded-full p-3 shadow-lg">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-background mb-2">EduPlatform</h1>
          <p className="text-background/80">Recuperação de senha</p>
        </div>

        {/* Forgot Password Card */}
        <Card className="shadow-hero border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              {isSubmitted ? "E-mail Enviado" : "Esqueci Minha Senha"}
            </CardTitle>
            <CardDescription className="text-center">
              {isSubmitted 
                ? "Verifique sua caixa de entrada para redefinir sua senha"
                : "Digite seu e-mail para receber as instruções de recuperação"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center space-y-4">
                <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Enviamos um link de recuperação para <strong>{email}</strong>
                </p>
                <p className="text-xs text-muted-foreground">
                  Não recebeu o e-mail? Verifique sua pasta de spam ou{" "}
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:underline"
                  >
                    tente novamente
                  </button>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <Button type="submit" className="w-full" variant="hero" size="lg">
                  Enviar Link de Recuperação
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <Link 
                to="/login" 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;