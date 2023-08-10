import { ReactNode, useEffect } from "react";
import useUser from "../lib/useUser";
import { useNavigate } from "react-router";

interface IHostOnlyPageProps {
  children: ReactNode;
}

export default function HostOnlyPage({ children }: IHostOnlyPageProps) {
  const { user, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!user?.is_host) {
        navigate("/");
      }
    }
  }, [user, navigate]);

  return <>{children}</>;
}
