import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAuth = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/login"); // Redirect to login if not authenticated
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  // Add a display name for better debugging
  WithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuth;
};

export default withAuth;
