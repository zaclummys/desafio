import {Container, Header, Content} from '../../components/container/container';
import LoginForm from './login-form';

export default function Login () {
    return (
        <Container>
            <Header>
                <h1>Login</h1>
            </Header>
            
            <Content>
                <LoginForm />
            </Content>
        </Container>
    );
}
