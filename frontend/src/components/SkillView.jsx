import SkillCard from "@/components/SkillCard";
const SkillView = async () => {
  let data = [];
  let loading = true;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`);
    data = await res.json();
  } catch (error) {
    console.error("Upload error:", error);
  } finally {
    loading = false;
  }
  const stack = [
    "frontend",
    "backend",
    "state",
    "route",
    "ui/ux",
    "websocket",
    "version control",
    "virtual",
    "database",
    "deploy",
    "environment",
    "media",
    "cms",
    "api",
  ];
  return (
    <div className="py-5 lg:py-10 bg-[#f7f7f7] ">
      {/* frontend  */}
      {stack.map((item, index) => (
        <div key={index}>
          <h1 className="py-2 lg:py-5 bg-light text-2xl lg:text-3xl font-bold ">
            {item}
          </h1>
          <div className="py-5 lg:py-10 flex flex-wrap gap-5 w-[95%] lg:w-[85%] mx-auto items-center justify-start">
            {data
              .filter((a) => a.state === item)
              .map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillView;

