import Acceleration from './screens/Acceleration.js'
import Profile from './screens/Profile.js'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Acceleration,
        Profile
    })
)

export default Routes