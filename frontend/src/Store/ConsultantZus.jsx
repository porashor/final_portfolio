import {create} from "zustand";
import {toast} from "react-toastify";



export const ConsultantHandle = create((set) => ({
    fname: "",
    email: "",
    phone: "",
    subject: "PSD/Figma/XD to Html",
    duration: "20min",
    timeStand: "6a-12p",
    allConsultant: [],
    cost: 100,
    loading: false,
    onFname: (name) => set({ fname: name }),
    onEmail: (email) => set({ email: email }),
    onPhone: (phone) => set({ phone: phone }),
    onSubject: (subject, taka) => {
        set({ subject: subject })
        if (subject === "PSD/Figma/XD to Html") {
            set({ cost: taka + taka*3 })
        }
    },
    onDuration: (duration) => set({ duration: duration }),
    onTimeStand: (timeStand) => set({ timeStand: timeStand }),
    onSubmitNow: async (e, fname, email, phone, subject, duration, timeStand, cost) => {
        e.preventDefault()
        console.log(fname, email, phone, subject, duration, timeStand, cost)
        set({ loading: true });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consultant`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fname, email, phone, subject, duration, timeStand, cost }),
            });
            const appdata = await res.json();
            toast.success("Consultant added successfully");
        } catch (error) {
            console.log(error)
        }finally{
            set({ loading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consultant`);
            const appdata = await res.json();
            set({ allConsultant: appdata });
        } 
    },
    onGet: async () => {
        set({ getloading: true });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consultant`);
            const appdata = await res.json();
            set({ allConsultant: appdata });
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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consultant/${id}`, {
                method: "DELETE",
            });
            const appdata = await res.json();
            toast.success("Consultant deleted successfully");
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Something went wrong");
        }finally{
            set({ delloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consultant`);
            const appdata = await res.json();
            set({ allConsultant: appdata });
        }
    }
}))