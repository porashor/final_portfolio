import { create } from "zustand";
import { toast } from "react-toastify";




export const RecentWorkHandles = create((set) => ({
    projectName: "",
    stack: "frontend",
    feature: "",
    links: "",
    image: null,
    tecnologies: "",
    duration: "",
    rate: 0,
    description: "",
    loading:false,
    allRecentWork: [],
    onProjectName: (name) => set({ projectName: name }),
    onStack: (stack) => set({ stack: stack }),
    onFeature: (feature) => set({ feature: feature }),
    onLinks: (links) => set({ links: links }),
    onImage: (image) => set({ image: image }),
    onTecnologies: (tecnologies) => set({ tecnologies: tecnologies }),
    onDuration: (duration) => set({ duration: duration }),
    onRate: (rate) => set({ rate: rate }),
    onDescription: (description) => set({ description: description }),
    onSubmitNow: async (e, image, projectName, stack, feature, links, tecnologies, duration, rate, description) => {
        e.preventDefault()
        const features = feature.split(',')
        const tecnology = tecnologies.split(',')
        const linkss = links.split(',')
        const formData = new FormData()
        formData.append('image', image)
        formData.append('name', projectName)
        formData.append('stack', stack)
        formData.append('features', JSON.stringify(features))
        formData.append('links', JSON.stringify(linkss))
        formData.append('tecnologies', JSON.stringify(tecnology))
        formData.append('duration', duration)
        formData.append('rate', rate)
        formData.append('description', description)
        set({loading: true})
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recentwork`, {
                method: "POST",
                body: formData, 
            });
            const appdata = await res.json();
            toast.success("Project added successfully");
          } catch (error) {
            console.error("Upload error:", error);
            toast.error("Something went wrong");
          }finally{
            set({loading: false})
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recentwork`);
            const appdata = await res.json();
            set({ allRecentWork: appdata });
          }
    },
    delid: '',
    delloading: false,
    onDel: async (id) => {
        set({ delid: id, delloading: true  });
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recentwork/${id}`, {
                method: "DELETE",
            });
            const appdata = await res.json();
            toast.success("Project deleted successfully");
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Something went wrong");
        }finally{
            set({ delloading: false });
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recentwork`);
            const appdata = await res.json();
            set({ allRecentWork: appdata });
        }
    },
    getloading: false,
    onGet: async () => {
        set({ getloading: true });
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recentwork`);
          const appdata = await res.json();
          set({ allRecentWork: appdata });
        } catch (error) {
          console.error("Upload error:", error);
        }finally{
          set({ getloading: false });
        }
      },
}));