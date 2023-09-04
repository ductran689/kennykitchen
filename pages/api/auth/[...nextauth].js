import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials) {
        const { email, password } = credentials;
        // perform you login logic
        // find out user from db
        /* User.map((user) => {
          if (
            email !== process.env.EMAIL_USER ||
            password !== process.env.GOOGLE_SECRET
          ) {
            console.log(email, password);
            throw new Error('invalid credentials');
          }
          return {
            id: '1234',
            name: 'Ken',
            email: 'sales@kennykitchen.com.au',
            role: 'admin',
          };
        }); */
        if (
          email !== process.env.EMAIL_USER ||
          password !== process.env.GOOGLE_SECRET
        ) {
          throw new Error('invalid credentials');
        }

        // if everything is fine
        return {
          role: 'admin',
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);
