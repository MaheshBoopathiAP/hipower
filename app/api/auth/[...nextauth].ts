// import connectMonogoDB from '../../../libs/mongodb'
// import User from '../../../models/User';
// import NextAuth from 'next-auth';
// import { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// const authOptions:NextAuthOptions = {
//     providers:[
//         CredentialsProvider({
//             name:'Credentials',
//             credentials:{},
//             async authorize(credentials, req) {
//                 const {mobile} = credentials as {
//                     mobile:String
//                 };
//                 await connectMonogoDB();
//                 const user = await User.findOne({mobile}) 
                
//                 return user; 
//             },
//         })
//     ],
//     session:{
//         strategy:'jwt'
//     },
//     secret:'BfgtcYN8nlGdCBSx4fWyL5qZ9O8=',
//     // debug: process.env.NODE_ENV === 'development',
//     callbacks:{
//         // async signIn({credentials,user}){
//         //     return true
//         // },
//         async jwt({token,user}){
//             console.log('jwt callback',{token,user});
//             return {...token,...user};
//         },
//         async session({session,token,user}){
//             console.log('session callback',{session,token,user});
//             session.user=token;
//             return session;
//         }
//     }
// }

// const authHandler =  NextAuth(authOptions);

// export {authHandler as GET, authHandler as POST};