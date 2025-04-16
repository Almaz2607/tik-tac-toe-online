import { UiButton } from '../uikit/ui-button';
import { UiModal } from '../uikit/ui-modal';

export function GameOverModal() {
  return (
    <UiModal
      width="md"
      isOpen={winnerSymbol}
      onClose={() => console.log('close')}
    >
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-xl">
          Победитель: <span className="text-teal-600">Jonaskakar</span>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton variant="outline" size="md">
          Вернуться
        </UiButton>
        <UiButton variant="primary" size="md">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
