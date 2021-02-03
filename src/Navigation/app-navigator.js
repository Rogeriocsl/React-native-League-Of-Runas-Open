import { createStackNavigator, createSwitchNavigator,} from "react-navigation";
import Precisao from '../Components/Precisao/precisao-index';
import PrecisaoSecundary from '../Components/Precisao/precisao-secundary-index';
import Dominacao from '../Components/Dominacao/dominacao-index';
import DominacaoSecundary from '../Components/Dominacao/dominacao-secundary-index';
import MyRunas from '../Components/MyRunas/my-runas';
import Feiticaria from '../Components/Feiticaria/feiticaria-index';
import FeiticariaSecundary from '../Components/Feiticaria/feiticaria-secundary-index';
import Determinacao from '../Components/Determinacao/determinacao-index';
import DeterminacaoSecundary from '../Components/Determinacao/determinacao-secundary-index';
import Inspiracao from '../Components/Inspiracao/inspiracao-index';
import InspiracaoSecundary from '../Components/Inspiracao/inspiracao-secundary-index';
import Login from '../Components/Login/login-index';
import Home from '../Components/Home/home-index';
import HomeCPR from '../Components/CriarPaginaDeRunas/homeCPR-index'
import AuthLoading  from "../Components/auth-loading";
import MPagina from '../Components/MinhaPagina/minha-pagina-index';

export const AppStack = createStackNavigator(
  {
    HomeScreen: { screen: Home },
    HomeCPRScreen: { screen: HomeCPR },
    PrecisaoScreen: { screen: Precisao},
    PrecisaoSecScreen: { screen: PrecisaoSecundary},
    DominacaoScreen: { screen: Dominacao },
    DominacaoSecScreen: { screen: DominacaoSecundary},
    FeiticariaScreen: { screen: Feiticaria },
    FeiticariaSecScreen: { screen: FeiticariaSecundary},
    DeterminacaoScreen: { screen: Determinacao },
    DeterminacaoSecScreen: { screen: DeterminacaoSecundary},
    InspiracaoScreen: { screen: Inspiracao},
    InspiracaoSecScreen: { screen: InspiracaoSecundary},
    MyRunasScreen: { screen: MyRunas },
    MPScreen: { screen: MPagina }


  }
);

export const AuthStack = createStackNavigator(
  {
    LoginScreen: { screen: Login }
  }
);

export const RootNavigator = createSwitchNavigator(
  {
    AuthLoadingScreen: { screen: AuthLoading },
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoadingScreen'
  }
)

