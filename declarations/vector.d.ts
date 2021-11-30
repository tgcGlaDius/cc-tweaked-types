/** @noSelfInFile */
interface VectorConstructor {
	new: (this: void, x: number, y: number, z: number) => Vector;
}

declare class Vector {
	x: number;
	y: number;
	z: number;

	add(o: Vector): Vector;

	sub(o: Vector): Vector;

	mul(m: number): Vector;

	div(m: number): Vector;

	unm(): Vector;

	dot(o: Vector): Vector;

	cross(o: Vector): Vector;

	length(): number;

	normalize(): Vector;

	round(tolerance?: number): Vector;

	tostring(): string;
}

declare var vector: VectorConstructor;
