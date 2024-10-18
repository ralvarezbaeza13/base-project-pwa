export interface BaseCRUDRepository<T> {
  getAll(): Promise<T[]>;
  get(id: string): Promise<T>;
  create(item: T): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  observeAll(callback: (items: T[]) => void): () => void;
}
