import { create } from "zustand";
import { toast } from "react-toastify";

export const navHandle = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const upSkill = create((set) => ({
  loading: false,
  tecName: "",
  state: "frontend",
  description: "",
  pogress: 0,
  image: null,
  allSkill: [],
  onName: (name) => set({ tecName: name }),
  onState: (state) => set({ state: state }),
  onDescription: (description) => set({ description: description }),
  onPogress: (pogress) => set({ pogress: pogress }),
  onImage: (image) => set({ image: image }),
  onSubmitNow: async (e, image, tecName, state, description, pogress) => {
    e.preventDefault();
    set({ loading: true });
    const formData = new FormData();
    formData.append("image", image); // ✅ File object
    formData.append("name", tecName);
    formData.append("state", state);
    formData.append("description", description);
    formData.append("pogress", pogress);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`, {
        method: "POST",
        body: formData, // ✅ send FormData directly
      });

      const appdata = await res.json();
      toast.success("Skill added successfully");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Something went wrong");
    }finally{
      set({ loading: false });
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`);
      const appdata = await res.json();
      set({ allSkill: appdata });
    }
  },

  getloading: true,
  onGet: async () => {
    set({ getloading: true });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`);
      const appdata = await res.json();
      set({ allSkill: appdata });
    } catch (error) {
      console.error("Upload error:", error);
    }finally{
      set({ getloading: false });
    }
  },

  delloading: false,
  delid: "",
  onDel: async (id) => {
    set({ delid: id });
    set({ delloading: true });
    console.log(id)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill/${id}`, {
        method: "DELETE",
      });
      const appdata = await res.json();
      toast.success("Skill deleted successfully");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Something went wrong");
    }finally{
      set({ delloading: false });
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`);
      const appdata = await res.json();
      set({ allSkill: appdata });
    }
  }
}));


import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaBlog } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaUserTimes } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";


export const navItems = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/about", label: "About", icon: <FcAbout /> },
  { href: "/skill", label: "Skills", icon: <GiSkills /> },
  { href: "/project", label: "Projects", icon: <GrProjects /> },
  { href: "/blog", label: "Blogs", icon: <FaBlog /> },
  { href: "/plan", label: "Plans", icon: <HiMiniShoppingCart /> },
  { href: "/contact", label: "Contact", icon: <MdContactPhone /> },
  { href: "/user", label: "User", icon: <FaUserTimes /> },
  { href: "/deshboard", label: "Deshboard", icon: <FaUserCheck /> },
];
