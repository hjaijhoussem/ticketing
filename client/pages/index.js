import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);
    return (
        <h1>hello from start page</h1>
    )
}

LandingPage.getInitialProps = async ({ context }) => {
    // this will executed in the server side rendering prpcess
    // we dont use useRequest hook, because 
    // hooks are used in component and this not a component
    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentUser');
    
    return data;
};

export default LandingPage;