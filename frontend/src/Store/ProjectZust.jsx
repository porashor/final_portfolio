import { create } from "zustand";
import { toast } from "react-toastify";



export const projectHandle = create((set) => ({
    fname: "",
    feature: "",
    tecnoliges: "",
    buyer: "",
    description: "",
    image: null,
    links: "",
    siteType: "E-commerce",
    role: "frontend",
    selary: 0,
    subloading:false,
    onFname: (name) => set({ fname: name }),
    onFeature: (feature) => set({ feature: feature }),
    onTecnoliges: (tecnoliges) => set({ tecnoliges: tecnoliges }),
    onBuyer: (buyer) => set({ buyer: buyer }),
    onDescription: (description) => set({ description: description }),
    onImage: (image) => set({ image: image }),
    onLinks: (links) => set({ links: links }),
    onSiteType: (siteType) => set({ siteType: siteType }),
    onRole: (role) => set({ role: role }),
    onSelary: (selary) => set({ selary: selary }),
    allproject: [],

    onSubmit: async (e, image, fname, feature, tecnoliges, buyer, description, links, siteType, role, selary)=>{
        e.preventDefault()
        set({ subloading: true });
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", fname);
        formData.append("feature", feature);
        formData.append("tecnoliges", tecnoliges);
        formData.append("buyer", buyer);
        formData.append("description", description);
        formData.append("links", links);
        formData.append("siteType", siteType);
        formData.append("role", role);
        formData.append("selary", selary);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
              method: "POST",
              body: formData, 
            });
            const appdata = await res.json();
            console.log(appdata)
            toast.success("Project added successfully");
          } catch (error) {
            console.error("Upload error:", error);
            toast.error("Something went wrong");
          }finally{
            set({ subloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`);
            const appdata = await res.json();
            set({ allproject: appdata });
          }
    },
    getloading : false,
    onGetProject : async () => {
        set({getloading: true});
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`);
        const appdata = await res.json();
        set({ allproject: appdata });
      } catch (error) {
        console.error("Upload error:", error);
      }finally{
        set({ getloading: false });
      }
    },
    delloading: false,
    delid: "",
    onDeleteProject: async (id) => {
      set({ delid: id });
      set({ delloading: true });
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project${id}`, {
          method: "DELETE",
        });
        const appdata = await res.json();
        toast.success("Project deleted successfully");
      } catch (error) {
        console.error("Upload error:", error);
        toast.error("Something went wrong");
      }finally{
        set({ delloading: false });
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`);
        const appdata = await res.json();
        set({ allproject: appdata });
      }
    }
}));