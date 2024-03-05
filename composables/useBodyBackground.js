import { onMounted } from "vue";

export default function useBodyBackground(imageUrl) {
  onMounted(() => {
    const backgroundElement = document.body;
    backgroundElement.style.backgroundImage = `url('${imageUrl}')`;
    backgroundElement.style.backgroundSize = "cover";
    backgroundElement.style.backgroundPosition = "center";
    backgroundElement.style.backgroundRepeat = "no-repeat;";
  });
}
