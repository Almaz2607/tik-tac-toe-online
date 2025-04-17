import { UiModal } from '../../uikit/ui-modal';
import { UiButton } from '../../uikit/ui-button';

export function GameOverModal({ winnerName, players }) {
  return (
    <UiModal
      width="md"
      isOpen={winnerName}
      onClose={() => console.log('close')}
    >
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-xl">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 justify-between gap-3 mt-2">
          {players}
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
