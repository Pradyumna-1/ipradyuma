// import Typography from "@mui/material/Typography"
// import Grid from "@mui/material/Grid"
// import { CommonProps } from "../App.props"
// import Stack from "@mui/material/Stack"
// import Box from "@mui/material/Box"
// import Image from "mui-image"
// import Button from "@mui/material/Button"
// import { navItems } from "../utils/constants"
// import { Typewriter } from "react-simple-typewriter"

// const titles = [
//   "A Full Stack Developer",
//   "A Java Full Stack Developer"
// ]

// const Home = ({ secHeight, navID }: CommonProps) => {
//   return (
//     <section id={navID}>
//       <Grid
//         container
//         sx={{
//           minHeight: secHeight,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Grid item>
//           <Stack
//             direction={{ xs: "column-reverse", sm: "row" }}
//             gap={{ xs: 6, sm: 2, md: 10 }}
//             alignItems={"center"}
//           >
//             {/* Text Section */}
//             <Box
//               sx={{
//                 textAlign: { xs: "center", sm: "left" },
//                 flexShrink: 2,
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                   fontSize: { xs: "1.25rem", sm: "1.5rem" },
//                   color: "text.secondary",
//                 }}
//               >
//                 <span role="img" aria-label="hi emoji" className="wave">
//                   {String.fromCodePoint(0x1f44b)}
//                 </span>
//                 Hey
//               </Typography>

//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#fff",
//                   mt: 2,
//                   fontSize: { xs: "2rem", md: "3rem" },
//                 }}
//               >
//                 I'm Pradyumna Kumar Naik
//               </Typography>

//               {/* Typewriter effect */}
//               <Typography
//                 component="span"
//                 sx={{
//                   display: "block",
//                   mt: 1,
//                   fontSize: { xs: '1.125rem', md: '1.5rem' },
//                   fontWeight: 500,
//                   color: "#8b5cf6",
//                   "& .Typewriter__cursor": {
//                     color: '#8b5cf6',
//                   },
//                 }}
//               >
//                 <Typewriter
//                   words={titles}
//                   loop
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={50}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </Typography>

//               {/* Contact Button */}
//               <Button
//                 size="large"
//                 sx={{
//                   mt: 3,
//                   backgroundImage:
//                     "linear-gradient(to right, #00C0FD 0%, #E70FAA 51%, #00C0FD 100%)",
//                   transition: "0.5s",
//                   backgroundSize: "200% auto",
//                   color: "#fff",
//                   typography: "h6",
//                   "&:hover": {
//                     backgroundPosition: "right center",
//                   },
//                 }}
//                 href={"#" + navItems[4]}
//               >
//                 Contact Me
//               </Button>
//             </Box>

//             {/* Profile Image Section */}
//             <Box
//               sx={{
//                 position: "relative",
//                 width: { xs: 220, md: 250 },
//                 height: { xs: 220, md: 250 },
//                 borderRadius: "50%",
//                 "&::before,&::after": {
//                   content: '" "',
//                   position: "absolute",
//                   inset: "-10px",
//                   borderRadius: "inherit",
//                   background: "linear-gradient(#00C0FD, #E70FAA)",
//                   zIndex: -1,
//                   animation: "spin 4s linear infinite",
//                 },
//                 "&::after": { filter: "blur(16px)" },
//               }}
//             >
//               <Image
//                 alt="Pradyumna Kumar Naik"
//                 src="/profile-pic.png"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                 }}
//               />
//             </Box>
//           </Stack>
//         </Grid>
//       </Grid>
//     </section>
//   )
// }

// export default Home
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { CommonProps } from "../App.props"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Image from "mui-image"
import Button from "@mui/material/Button"
import { navItems } from "../utils/constants"
import { Typewriter } from "react-simple-typewriter"

const titles = [
  "Full Stack Developer",
  "Java Full Stack Developer"
 
]

const Home = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid
        container
        sx={{
          minHeight: secHeight,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            gap={{ xs: 6, sm: 2, md: 10 }}
            alignItems={"center"}
          >
            {/* ========== Left Side Content ========== */}
            <Box
              sx={{
                textAlign: { xs: "center", sm: "left" },
                flexShrink: 2,
              }}
            >
              {/* Hey 👋 */}
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#facc15", // amber-400
                  fontWeight: 500,
                }}
              >
                <span role="img" aria-label="hi emoji">👋</span> Hey
              </Typography>

              {/* Name with hidden extra spacing */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  // color: "#fff",
                  mt: 1.5,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                }}
              >
                I'm Pradyumna
                <Box component="span" sx={{ visibility: "hidden" }}>
                  {" "}Kumar Naik
                </Box>
              </Typography>

              {/* Animated Typewriter Line */}
              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  fontWeight: 500,
                  // color: "#ffffff",
                }}
              >
                I am a{" "}
                <Box
                  component="span"
                  sx={{ color: "#a855f7" }} // violet-500
                >
                  <Typewriter
                    words={titles}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1200}
                  />
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  maxWidth: 500,
                  // color: "#cbd5e1", // slate-300
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                }}
              >
                I focus on building scalable and efficient web applications
                that are clean, user-friendly, and built with best practices
                in mind. I love solving real-world problems through code.
              </Typography>

              {/* Contact Button */}
              <Button
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: "#8b5cf6",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  px: 3,
                  py: 1.2,
                  "&:hover": {
                    backgroundColor: "#7c3aed",
                  },
                }}
                href={"#" + navItems[4]}
              >
                Contact Me
              </Button>
            </Box>

            {/* ========== Profile Image with Gradient Ring ========== */}
            <Box
              sx={{
                position: "relative",
                width: { xs: 220, md: 260 },
                height: { xs: 220, md: 260 },
                borderRadius: "50%",
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "inherit",
                  background: "linear-gradient(135deg, #00C0FD, #E70FAA)",
                  zIndex: -1,
                  animation: "spin 4s linear infinite",
                },
                "&::after": {
                  filter: "blur(16px)",
                },
              }}
            >
              <Image
                alt="Pradyumna"
                src="/profile-pic.png" // <-- Your image here
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  )
}

export default Home
