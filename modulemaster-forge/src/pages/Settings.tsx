import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Bell, 
  Shield, 
  ArrowLeft,
  Mail,
  Smartphone,
  Eye,
  EyeOff
} from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [accountData, setAccountData] = useState({
    name: "João Silva",
    email: "joao@email.com",
    phone: "+55 11 99999-9999",
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    emailGeneral: true,
    emailProgress: true,
    emailDeadlines: false,
    smsGeneral: false,
    smsProgress: true,
    smsDeadlines: true,
  });

  const handleAccountUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account update:", accountData);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Password change request");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" size="icon" asChild className="mr-4">
              <Link to="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-foreground">Configurações</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Account Settings */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                Configurações da Conta
              </CardTitle>
              <CardDescription>
                Gerencie suas informações pessoais e dados da conta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAccountUpdate} className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-lg font-semibold">
                      {accountData.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline">Alterar Foto</Button>
                    <p className="text-sm text-muted-foreground mt-1">
                      JPG, PNG ou GIF. Máximo 2MB.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={accountData.name}
                      onChange={(e) => setAccountData({...accountData, name: e.target.value})}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={accountData.email}
                      onChange={(e) => setAccountData({...accountData, email: e.target.value})}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={accountData.phone}
                      onChange={(e) => setAccountData({...accountData, phone: e.target.value})}
                      className="h-11"
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero">
                  Salvar Alterações
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Password Settings */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                Alterar Senha
              </CardTitle>
              <CardDescription>
                Mantenha sua conta segura com uma senha forte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Senha Atual</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha atual"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                      className="h-11 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-11 w-11"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Digite a nova senha"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirme a nova senha"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      className="h-11"
                    />
                  </div>
                </div>

                <Button type="submit" variant="warning">
                  Alterar Senha
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure como e quando você quer receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Notifications */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">Notificações por E-mail</h3>
                </div>
                <div className="space-y-4 pl-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailGeneral" className="font-medium">
                        Informações Gerais
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Novidades, atualizações e informações importantes
                      </p>
                    </div>
                    <Switch
                      id="emailGeneral"
                      checked={notifications.emailGeneral}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, emailGeneral: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailProgress" className="font-medium">
                        Progresso no Curso
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Atualizações sobre seu progresso e conquistas
                      </p>
                    </div>
                    <Switch
                      id="emailProgress"
                      checked={notifications.emailProgress}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, emailProgress: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailDeadlines" className="font-medium">
                        Prazos e Lembretes
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Lembretes sobre provas e atividades pendentes
                      </p>
                    </div>
                    <Switch
                      id="emailDeadlines"
                      checked={notifications.emailDeadlines}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, emailDeadlines: checked})
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* SMS Notifications */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">Notificações por SMS</h3>
                </div>
                <div className="space-y-4 pl-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsGeneral" className="font-medium">
                        Informações Gerais
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Atualizações importantes e urgentes
                      </p>
                    </div>
                    <Switch
                      id="smsGeneral"
                      checked={notifications.smsGeneral}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, smsGeneral: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsProgress" className="font-medium">
                        Progresso no Curso
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Marcos importantes do seu aprendizado
                      </p>
                    </div>
                    <Switch
                      id="smsProgress"
                      checked={notifications.smsProgress}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, smsProgress: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsDeadlines" className="font-medium">
                        Prazos e Lembretes
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Lembretes urgentes sobre prazos
                      </p>
                    </div>
                    <Switch
                      id="smsDeadlines"
                      checked={notifications.smsDeadlines}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, smsDeadlines: checked})
                      }
                    />
                  </div>
                </div>
              </div>

              <Button variant="hero" className="mt-6">
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;