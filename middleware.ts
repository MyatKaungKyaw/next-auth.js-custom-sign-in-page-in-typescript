import { withAuth } from "next-auth/middleware"
import { authOptions } from "./lib/auth-options"

export default withAuth({
  pages: {
    ...authOptions.pages
  }
})