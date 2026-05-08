export function Avatar({ user, size = "md" }) {
  const sizes = { sm: "w-8 h-7", md: "w-12 h-10", lg: "w-16 h-14" };
  return (
    <div className={`${sizes[size]} rounded-full ${user.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
      {user.initials}
    </div>
  );
}
