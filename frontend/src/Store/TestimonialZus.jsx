import {create} from "zustand";
import {toast} from "react-toastify";


export const TestimonialHandle = create((set) => ({
    fname: "",
    position: "",
    rating: 0,
    description: "",
    image: null,
    onFname: (name) => set({ fname: name }),
    onPosition: (position) => set({ position: position }),
    onRating: (rating) => set({ rating: rating }),
    onDescription: (description) => set({ description: description }),
    onImage: (image) => set({ image: image }),
    subloading: false,
    allTestimonial: [],
    onSubmitNow: async (e, image, fname, position, rating, description) => {
        e.preventDefault()
        set({ subloading: true });
        console.log(image)
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", fname);
            formData.append("position", position);
            formData.append("rating", rating);
            formData.append("description", description);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`, {
                method: "POST",
                body: formData,
            });
            const appdata = await res.json();
            toast.success("Testimonial added successfully");
        } catch (error) {
            console.log(error)
        }finally{
            set({ subloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`);
            const appdata = await res.json();
            set({ allTestimonial: appdata });
        }
    },
    getloading: true,
    onGet: async () => {
        set({ getloading: true });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`);
            const appdata = await res.json();
            set({ allTestimonial: appdata });
        } catch (error) {
            console.error("Upload error:", error);
        }finally{
            set({ getloading: false });
        }
    },
    delloading: false,
    delid: "",
    onDel: async (id) => {
        set({ delid: id, delloading: true  });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial/${id}`, {
                method: "DELETE",
            });
            const appdata = await res.json();
            toast.success("Testimonial deleted successfully");
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Something went wrong");
        }finally{
            set({ delloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`);
            const appdata = await res.json();
            set({ allTestimonial: appdata });
        }
    },
}))