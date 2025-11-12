import { create } from "zustand";
import { toast } from "react-toastify";



export const PlanHandle = create((set) => ({
    pName: "",
    price: 0,
    description: "",
    image : '',
    features: '',
    duration: '',
    loading: false,
    allPlan: [],
    onPname: (pName) => set({ pName: pName }),
    onPrice: (price) => set({ price: price }),
    onDescription: (description) => set({ description: description }),
    onImage: (image) => set({ image: image }),
    onFeatures: (features) => set({ features: features }),
    onDuration: (duration) => set({ duration: duration }),
    onSubmitNow: async (e, pName, price, description, image, features, duration) => {
        e.preventDefault()
        set({ loading: true })
        const feature = features.split(',')
        const fromData = new FormData();
        fromData.append('image', image)
        fromData.append('name', pName)
        fromData.append('price', price)
        fromData.append('description', description)
        fromData.append('features', JSON.stringify(feature))
        fromData.append('duration', duration)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan`, {
                method: "POST",
                body: fromData,
            });
            const appdata = await res.json();
            toast.success("Plan added successfully");
        } catch (error) {
            console.log(error)
        } finally {
            set({ loading: false })
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan`);
            const appdata = await res.json();
            set({ allPlan: appdata });
        }
    },
    getloading: false,
    onGet: async () => {
        set({ getloading: true });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan`);
            const appdata = await res.json();
            set({ allPlan: appdata });
        } catch (error) {
            console.error("Upload error:", error);
        } finally {
            set({ getloading: false });
        }
    },
    delid: '',
    delloading: false,
    onDel: async (id) => {
        set({ delid: id, delloading: true });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan/${id}`, {
                method: "DELETE",
            });
            const appdata = await res.json();
            toast.success("Plan deleted successfully");
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Something went wrong");
        } finally {
            set({ delloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan`);
            const appdata = await res.json();
            set({ allPlan: appdata });
        }
    }
}))