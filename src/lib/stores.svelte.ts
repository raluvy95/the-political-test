import { questions } from './questions';
import type { PoliticalTest } from './types';

export function createPoliticalTest() {
	const politicalTest: PoliticalTest = $state({
		liberty: 0,
		democracy: 0,
		readyToShow: false,
		questionsLeft: questions.length
	});

	return {
		get resultAll() {
			return politicalTest;
		},

		get lib() {
			return politicalTest.liberty;
		},

		get demo() {
			return politicalTest.democracy;
		},

		get readyToShow() {
			return politicalTest.readyToShow;
		},

		questionsDone() {
			politicalTest.questionsLeft--;

			if (politicalTest.questionsLeft <= 0) {
				this.setReady(true);
			}
		},

		addLib(value: number) {
			politicalTest.liberty += value;
		},

		addDemo(value: number) {
			politicalTest.democracy += value;
		},

		rmLib(value: number) {
			politicalTest.liberty -= value;
		},

		rmDemo(value: number) {
			politicalTest.democracy -= value;
		},

		setLib(value: number) {
			politicalTest.liberty = value;
		},

		setDemo(value: number) {
			politicalTest.democracy = value;
		},

		setReady(value: boolean) {
			politicalTest.readyToShow = value;
		}
	};
}

export type PoliticalTestType = ReturnType<typeof createPoliticalTest>;
