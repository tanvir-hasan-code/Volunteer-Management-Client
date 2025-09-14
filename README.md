# Volunify - Volunteer Management Website

Dear Candidates,  
Congratulations on advancing to the next stage of our selection process! 🎉  
This project showcases a user-friendly platform for volunteer management. Users can create, update, and delete volunteer posts, and participate as volunteers in others’ posts. This project highlights your skills in front-end and back-end development, responsiveness, and full-stack implementation.

---

## 🌐 Live Links

- **Client Site:** [https://volunify-site.netlify.app/](https://volunify-site.netlify.app/)
- **Server Site:** [https://volunteer-management-server-kappa.vercel.app/](https://volunteer-management-server-kappa.vercel.app/)

---

## 🛠 Technologies & Dependencies

### Client-side (React + Vite + TailwindCSS)

- **React**: `^19.1.1`
- **TailwindCSS**: `^4.1.12`
- **DaisyUI**: `^5.0.54`
- **Framer Motion**: `^12.23.12`
- **React Router**: `^7.8.2`
- **Axios**: `^1.11.0`
- **Firebase**: `^12.2.1`
- **Other Libraries:** React icons, Swiper, SweetAlert2, React Datepicker, React Tooltip, React CountUp

### Server-side (Node.js + Express + MongoDB + Firebase Admin)

- **Express**: `^5.1.0`
- **MongoDB**: `^6.19.0`
- **Firebase Admin**: `^13.5.0`
- **JWT Authentication**: `jsonwebtoken ^9.0.2`
- **CORS & Cookie Parser**: `cors ^2.8.5` / `cookie-parser ^1.4.7`
- **Environment Variables**: `dotenv ^17.2.2`

---

## 🎯 Key Features

### Authentication System

- Email & Password-based login and registration
- Google/GitHub login (one option implemented)
- Dynamic toast/sweetalert messages for success/error
- JWT authentication for protected routes
- Password validation: Uppercase, lowercase, min 6 characters

### User Roles & Functionalities

#### General Users

- View all volunteer need posts
- Search posts by title
- See volunteer details

#### Logged-in Users

- Add volunteer need posts (Private Route)
- Update & delete own posts
- Be a volunteer for others’ posts
- Manage own volunteer requests

---

### Layout & Page Structure

- **Navbar**: Website logo/name, Home, All Volunteer Posts, Login/Logout, My Profile dropdown
- **Home Page**: Banner/Slider, Volunteer Needs Section (max 6 cards), extra sections, Framer Motion animations
- **Add Volunteer Post Page**: Private route with form for creating a post
- **Volunteer Detail Page**: Private route with all post details and “Be a Volunteer” functionality
- **Manage My Posts Page**: Private route, table layout for user’s posts & requests
- **Footer**: Eye-catching design with relevant info

---

### CRUD Operations

- **Create**: Add volunteer post / request
- **Read**: View all posts / manage my posts / volunteer requests
- **Update**: Edit your own volunteer posts
- **Delete**: Delete post or volunteer request with confirmation

All actions show relevant toast/notification messages.

---

### Extra Features

- Responsive design (mobile, tablet, desktop)
- Dark/Light theme toggle
- Dynamic document title for each route
- Loading spinner during data fetch
- 404 / Not Found page
- Optional layout change from card to table in volunteer posts
- Optional animations with Framer Motion

---

## 🔑 Deployment Guidelines

- Client hosted on **Netlify**
- Server hosted on **Vercel**
- Secure Firebase & MongoDB credentials using environment variables
- Ensure CORS-free production server
- Logged-in users retain access on page reloads

---

## 📂 Project Structure

### Client
