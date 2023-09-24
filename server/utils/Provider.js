import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

export const connectPassport = () => {
    passport.use(new GoogleStrategy({
        clientID: "asd",
        clientSecret: "asd",
        callbackURL: "asd",
    }, async function (accessToken, refreshToken, profile, done) {
        //database comes here
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        //const user = await User.findById(id);
        done(null, user);
    });
}