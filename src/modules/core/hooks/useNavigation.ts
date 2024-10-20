import { PATH } from "@/modules/recipes/constants";
import { useRouter } from "next/navigation";
import { useNavigationStore } from "../stores";
import { logoutService } from "@/modules/auth/actions";

export const useNavigation = () => {
  const { isOpen, setIsOpen } = useNavigationStore((state) => state);
  const router = useRouter();

  const goToMyRecipes = () => {
    router.push(`/${PATH.myRecipes}`);
  };

  const logout = async () => {
    await logoutService();
    window.location.replace("/");
  };

  return { goToMyRecipes, logout, isOpen, setIsOpen };
};
