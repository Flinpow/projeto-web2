package br.com.tads.commons.dto.response;

public class EntitiesResponseDto<T> {
    private T entity;

    public EntitiesResponseDto(T entity) {
        this.entity = entity;
    }

    public T getEntity() {
        return entity;
    }

    public void setEntity(T entity) {
        this.entity = entity;
    }
}