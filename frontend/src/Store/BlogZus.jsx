import { create } from "zustand";
import { toast } from "react-toastify";



export const blogHandle = create((set) => ({
    header: "",
    autor: "",
    description: "",
    image: null,
    onHeader: (header) => set({ header: header }),
    onAutor: (autor) => set({ autor: autor }),
    onDescription: (description) => set({ description: description }),
    onImage: (image) => set({ image: image }),
    subloading:false,
    allBlog: [],
    onSubmitNow: async (e, image, header, autor, description) => {
        e.preventDefault()
        set({ subloading: true });
        console.log(image, header, autor, description)
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("title", header);
            formData.append("autor", autor);
            formData.append("description", description);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
                method: "POST",
                body: formData,
            });
            const appdata = await res.json();
            toast.success("Blog added successfully");
        } catch (error) {
            console.log(error)
        }finally{
            set({ subloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
            const appdata = await res.json();
            set({ allBlog: appdata });
        } 
    },
    getloading: false,
    onGet: async () => {
        set({ getloading: true });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
            const appdata = await res.json();
            set({ allBlog: appdata });
        } catch (error) {
            console.error("Upload error:", error);
        }finally{
            set({ getloading: false });
        }
    },
    delid: "",
    delloading: false,
    onDel: async (id) => {
        set({ delid: id, delloading: true  });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
                method: "DELETE",
            });
            const appdata = await res.json();
            toast.success("Blog deleted successfully");
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Something went wrong");
        }finally{
            set({ delloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
            const appdata = await res.json();
            set({ allBlog: appdata });
        }
    },
}))